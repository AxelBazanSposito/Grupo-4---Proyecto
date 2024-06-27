from flask import jsonify, request
from app.models import Reserva

def index():
    return jsonify({'message': 'Hola bienvenido al mundo VEGAN'})

def create_Reserva():
    data = request.json
    new_reserva = Reserva(title=data['Local'], fecha=data['Fecha'], hora_date=hora['re_date'],)
    new_reserva.save()
    return jsonify({'message': 'Reserva created successfully'}), 201

def get_all_reserva():
    reserva = Reserva.get_all()
    return jsonify([reserva.serialize() for reserva in reserva])

def get_reserva(reserva_id):
    reserva = Reserva.get_by_id(reserva_id)
    if not reserva:
        return jsonify({'message': 'Reserva not found'}), 404
    return jsonify(reserva.serialize())

def update_register(movie_id):
    register = Reserva.get_by_id(movie_id)
    if not reserva:
        return jsonify({'message': 'Reserva not found'}), 404
    data = request.json
    reserva.local = data['Local']
    reserva.fecha = data['Fecha']
    reserva.hora_date = data['Hora_date']
    reserva.email = data['Email_date']
    reserva.email = data['Comensales_date']
    reserva.save()
    return jsonify({'message': 'Reserva updated successfully'})

def delete_reserva(reserva_id):
    reserva = Reserva.get_by_id(reserva_id)
    if not reserva:
        return jsonify({'message': 'Reserva not found'}), 404
    reserva.delete()
    return jsonify({'message': 'Reserva deleted successfully'})