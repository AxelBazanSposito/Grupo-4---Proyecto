from app.database import get_db

class Reserva:
    def __init__(self, id_reserva=None, local=None, hora=None, nombre=None, email=None, comensales=None):
        self.id_reserva = id_reserva
        self.local = local
        # self.fecha = fecha
        self.hora = hora
        self.nombre= nombre
        self.email = email
        self.comensales = comensales
        # self.estado = estado

    def saveReserva(self):
        db = get_db()
        cursor = db.cursor()
        if self.id_reserva:
            cursor.execute("""
                UPDATE reservas SET local = %s, hora = %s, nombre = %s, email = %s, comensales = %s
                WHERE id_reserva = %s
            """, ( self.id_reserva,self.local, self.hora,self.nombre,self.email, self.comensales))
        else:
            cursor.execute("""
                INSERT INTO reservas (hora, comensales, email,nombre,local) VALUES (%s, %s, %s, %s)
            """, ( self.id_reserva, self.local, self.hora, self.nombre, self.email, self.comensales))
            self.id_reserva = cursor.lastrowid
        db.commit()
        cursor.close()

    @staticmethod
    def get_all():
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM reservas")
        rows = cursor.fetchall()
        reservas = [Reserva(id_reserva=row[0], local=row[1], hora=row[2], nombre=row[3], email=row[4], comensales=row[5]) for row in rows]
        cursor.close()
        return reservas

    @staticmethod
    def get_by_id(reserva_id):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM reserva WHERE id_reserva = %s", (reserva_id))
        row = cursor.fetchone()
        cursor.close()
        if row:
            return Reserva(id_reserva=row[0], local=row[1],hora=row[2], nombre=row[3], email=row[4], comensales=row[5])
        return None

    def delete(self):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("DELETE FROM reserva WHERE id_reserva = %s", (self.id_reserva,))
        db.commit()
        cursor.close()

    def serialize(self):
        return {
            'id_reserva': self.id_reserva,
            'local': self.local,
            'hora': self.hora,
            # 'fecha': self.fecha.strftime('%d/%m/%Y'),
            'nombre': self.nombre,
            'email': self.email,
            'comensales': self.comensales
            # 'estado': self.estado
        }

