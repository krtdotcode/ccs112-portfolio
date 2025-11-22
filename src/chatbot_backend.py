import json
import re
from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse

# Simplified knowledge base - keyword to info mapping
knowledge_base = {
    'skills': {
        'keywords': ['skills', 'technologies', 'languages', 'frameworks', 'tools'],
        'response': 'Kurt has expertise in the following technologies:\n\nProgramming Languages: Python, Java, HTML, CSS, JavaScript\n\nData Science & ML: NumPy, Pandas, Scikit-learn, TensorFlow, Matplotlib, Seaborn\n\nWeb Development: React, Bootstrap, Tailwind CSS, Angular, TypeScript, Node.js, Firebase, Laravel\n\nOther Tools: Git, GitHub'
    },
    'projects': {
        'keywords': ['projects', 'work', 'portfolio', 'develop', 'build'],
        'response': 'Kurt has developed several impressive projects:\n\n1. TeeLuxe - A modern e-commerce platform built with React, Bootstrap, and Laravel\n2. TaskFlow - A task management app with full CRUD operations using React and Docker\n3. EdTech - An advanced mentorship platform using Angular, TypeScript, and Firebase\n4. AI Weather Predictor - ML-powered weather forecasting with Random Forest algorithm\n5. Dangal Connect - A matchmaking platform for university communities\n6. Library Management System - A comprehensive system using HTML, CSS, JavaScript, PHP, and MySQL'
    },
    'experience': {
        'keywords': ['experience', 'background', 'education', 'student'],
        'response': 'Kurt Joshua Cayaga is a Computer Science student at University of Cabuyao with a strong passion for AI/ML. He is actively building skills through hands-on projects and has competed in several programming competitions, including being a semifinallist in the National Programming Challenge by CodeChum.'
    },
    'contact': {
        'keywords': ['contact', 'social', 'facebook', 'instagram', 'github', 'linkedin', 'reach'],
        'response': 'You can connect with Kurt through:\n\nFacebook: @kjpc.16\nInstagram: @krt.code\nGithub: @krtdotcode\nLinkedIn: kurtjoshuacayaga\n\nFeel free to reach out for collaborations or opportunities!'
    },
    'leadership': {
        'keywords': ['leadership', 'officer', 'devcon', 'acss', 'community', 'involve'],
        'response': 'Kurt serves as Campus DEVCON officer for DEVCON Laguna for 2025-2026 and is currently a member of the R&D Committee of ACSS-UC. He is also actively involved in various tech communities across the Philippines.'
    },
    'favorite': {
        'keywords': ['favorite', 'prefer', 'like'],
        'response': 'Kurt\'s favorite programming language is Python. He loves its simplicity, versatility, and powerful ecosystem for data science and machine learning applications.'
    },
    'location': {
        'keywords': ['location', 'live', 'based', 'address'],
        'response': 'Kurt lives in Cabuyao, Laguna, Philippines, where he studies Computer Science at University of Cabuyao.'
    },
    'birthday': {
        'keywords': ['birthday', 'born', 'age'],
        'response': 'Kurt was born on August 16, 2004.'
    }
}

class ChatbotHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/chat':
            # Parse request
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            query = data['query'].lower().strip()

            # Process query with simple keyword matching
            relevant_responses = self.find_relevant_info(query)

            if relevant_responses:
                if len(relevant_responses) == 1:
                    response_text = relevant_responses[0]
                else:
                    # Combine multiple relevant responses
                    response_text = '\n\n'.join(relevant_responses[:3])  # Limit to top 3
            else:
                response_text = "I'm Kurt's AI assistant. I can tell you about his skills, projects, background, leadership roles, or how to contact him. What would you like to know?"

            # Send response
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Headers', 'Content-type')
            self.end_headers()

            response = {'response': response_text}
            self.wfile.write(json.dumps(response).encode('utf-8'))

    def do_OPTIONS(self):
        # Handle preflight requests for CORS
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Content-type')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.end_headers()

    def find_relevant_info(self, query):
        relevant = []

        # Search through knowledge base
        for category, info in knowledge_base.items():
            # Check if any keywords match the query
            for keyword in info['keywords']:
                if keyword in query:
                    relevant.append(info['response'])
                    break  # Only add once per category

            # Also check for partial matches
            for keyword in info['keywords']:
                if len(keyword) > 3 and keyword in query:
                    relevant.append(info['response'])
                    break

        return list(set(relevant))  # Remove duplicates

if __name__ == '__main__':
    server = HTTPServer(('localhost', 5000), ChatbotHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
