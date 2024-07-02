from flask import jsonify, request
from app.models import Reserva

def index():
    return jsonify({'message': 'Hola bienvenido al mundo VEGAN'})

def create_reserva():
    data = request.json
    new_reserva = Reserva(local=data['local'],hora=data['hora'], nombre=data['nombre'], email=data['email'], comensales=data['comensales'])
    new_reserva.saveReserva()
    return jsonify({'message': 'Reserva creada'}), 201

def get_all_reservas():
    reservas = Reserva.get_all()
    return jsonify([reserva.serialize() for reserva in reservas])

def get_reserva(reserva_id):
    reserva = Reserva.get_by_id(reserva_id)
    if not reserva:
        return jsonify({'message': 'Reserva no encontrada'}), 404
    return jsonify(reserva.serialize())

def update_reserva(reserva_id):
    reserva = Reserva.get_by_id(reserva_id)
    if not reserva:
        return jsonify({'message': 'Reserva no encontrada'}), 404
    data = request.json
    reserva.local = data['local']
    # reserva.fecha = data['fecha']
    reserva.hora = data['hora']
    reserva.nombre= data['nombre']
    reserva.email = data['email']
    reserva.comensales = data['comensales']
    # reserva.estado = data['estado']
    reserva.saveReserva()
    return jsonify({'message': 'Tu reserva se agendó'})

def delete_reserva(reserva_id):
    reserva = Reserva.get_by_id(reserva_id)
    if not reserva:
        return jsonify({'message': 'Reserva no encontrada'}), 404
    reserva.delete()
    return jsonify({'message': 'Reserva eliminada'})