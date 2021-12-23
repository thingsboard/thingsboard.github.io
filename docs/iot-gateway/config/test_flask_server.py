from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def query_example():
    print(request.get_data())
    return "OK"

if __name__ == '__main__':
    app.run(port=5001)
