from flask import Flask
from flask_cors import CORS
from app.database import init_app
from app.views import *

app = Flask(__name__)

# Configurar la aplicación Flask
# app.config.from_pyfile('config/development.py')

# Inicializar la base de datos con la aplicación Flask
init_app(app)
#permitir solicitudes desde cualquier origen
CORS(app)
#permitir solicitudes desde un origen específico
# CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5000"}})

# Rutas para el CRUD de la entidad Reserva ( Agregar ruta de acceso html carpeta!!!)
app.route('/', methods=['GET'])(index)
app.route('/template/reserva.html', methods=['POST'])(create_reserva)
app.route('/', methods=['GET'])(get_all_reserva)
app.route('/api/reserva/<int:reserva_id>', methods=['GET'])(get_reserva)
app.route('/api/reserva/<int:reserva_id>', methods=['PUT'])(update_reserva)
app.route('/api/reserva/<int:reserva_id>', methods=['DELETE'])(delete_reserva)

if __name__ == '__main__':
    app.run(debug=True)