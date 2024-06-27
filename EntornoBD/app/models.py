from app.database import get_db

class Reserva:
    def __init__(self, id_Reserva=None, Local=None, Fecha=None, Hora_date=None, Email=None, Comensales=None):
        self.id_Reserva = id_Reserva
        self.local = local
        self.fecha = fecha
        self.hora_date = hora_date
        self.email_date = email_date
        self.comensales = comensales

    def save(self):
        db = get_db()
        cursor = db.cursor()
        if self.id_reserva:
            cursor.execute("""
                UPDATE crear cuenta SET title = %s, director = %s, release_date = %s, banner = %s
                WHERE id_crear cuenta = %s
            """, (self.local, self.fecha, self.hora_date,self.email_date, self.comensales, self.id_reserva))
        else:
            cursor.execute("""
                INSERT INTO movies (title, director, release_date, banner) VALUES (%s, %s, %s, %s)
            """, (self.local, self.fecha, self.hora_date, self.email_date, self.comensales))
            self.id_movie = cursor.lastrowid
        db.commit()
        cursor.close()

    @staticmethod
    def get_all():
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM reserva")
        rows = cursor.fetchall()
        movies = [Reserva(id_reserva=row[0], Fecha=row[1], Hora=row[2], Email_date=row[3], Comensales=row[4]) for row in rows]
        cursor.close()
        return reserva

    @staticmethod
    def get_by_id(reserva_id):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM crear cuenta WHERE id_movie = %s", (movie_id,))
        row = cursor.fetchone()
        cursor.close()
        if row:
            return Reserva(reserva=row[0], local=row[1],fecha=row[2], hora_date=row[3], email_date=row[4], comensales=row[5])
        return None

    def delete(self):
        db = get_db()
        cursor = db.cursor()
        cursor.execute("DELETE FROM crear cuenta WHERE id_movie = %s", (self.id_movie,))
        db.commit()
        cursor.close()

    def serialize(self):
        return {
            'id_reserva': self.id_reserva,
            'fecha': self.hora,
            'fecha': self.fecha,
            'hora_date': self.hora_date.strftime('%Y-%m-%d'),
            'email_date': self.email_date,
            'camensales': self.banner
        }

