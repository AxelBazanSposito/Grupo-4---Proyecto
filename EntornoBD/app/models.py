from app.database import get_db

class Reserva:
    def __init__(self, id_reserva=None, local=None, fecha=None, hora=None, nombre=None, email=None, comensales=None, estado=None):
        self.id_reserva = id_reserva
        self.local = local
        self.fecha = fecha
        self.hora = hora
        self.nombre= nombre
        self.email = email
        self.comensales = comensales
        self.estado = estado

    def save(self):
        db = get_db()
        cursor = db.cursor()
        if self.id_reserva:
            cursor.execute("""
                UPDATE crear cuenta SET title = %s, director = %s, release_date = %s, banner = %s
                WHERE id_crear cuenta = %s
            """, ( self.id_reserva,self.local, self.fecha, self.hora,self.nombre,self.email, self.comensales, self.estado))
        else:
            cursor.execute("""
                INSERT INTO movies (title, director, release_date, banner) VALUES (%s, %s, %s, %s)
            """, ( self.id_reserva, self.local, self.fecha, self.hora,self.nombre, self.email, self.comensales, self.estado))
            self.id_movie = cursor.lastrowid
        db.commit()
        cursor.close()

    @staticmethod
    def get_all():
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM reservas")
        rows = cursor.fetchall()
        reservas = [Reserva(id_reserva=row[0], local=row[1], fecha=row[2], hora=row[3], nombre=row[4], email=row[5], comensales=row[6], estado=row[7]) for row in rows]
        cursor.close()
        return reservas

    @staticmethod
    def get_by_id(reserva_id):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM crear cuenta WHERE id_movie = %s", (reserva_id))
        row = cursor.fetchone()
        cursor.close()
        if row:
            return Reserva(reserva=row[0], local=row[1],fecha=row[2], hora_date=row[3], email=row[4], comensales=row[5])
        return None

    def delete(self):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("DELETE FROM crear cuenta WHERE id_reserva = %s", (self.id_reserva,))
        db.commit()
        cursor.close()

    def serialize(self):
        return {
            'id_reserva': self.id_reserva,
            'local': self.local,
            'hora': self.hora,
            'fecha': self.fecha,
            'nombre': self.nombre,
            'email': self.email,
            'comensales': self.comensales,
            'estado': self.estado
        }

