from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'llave_secreta_super_segura_upq' # Necesario para usar session

@app.route('/')
def index():
    # Inicializamos el nivel en 1 si el usuario es nuevo
    if 'level' not in session:
        session['level'] = 1
        
    error_msg = session.pop('error', None)
    success_msg = session.pop('success', None)
    
    return render_template('index.html', 
                           level=session['level'], 
                           error=error_msg, 
                           success=success_msg)

@app.route('/submit/<int:room>', methods=['POST'])
def submit(room):
    # Lógica de Validación para la Sala 1 (Asistencia y Dispositivos)
    if room == 1:
        q1 = request.form.get('q1_1')
        q2 = request.form.get('q1_2')
        check = request.form.get('check1')
        
        if q1 == '80' and q2 == 'actividades' and check == 'on':
            session['level'] = max(session.get('level', 1), 2)
            session['success'] = "¡Cámara de las Reglas superada! Has comprendido la disciplina."
        else:
            session['error'] = "Respuestas incorrectas. Revisa el reglamento sobre asistencia y dispositivos."

    # Lógica de Validación para la Sala 2 (Evaluación)
    elif room == 2:
        q1 = request.form.get('q2_1')
        q2 = request.form.get('q2_2')
        check = request.form.get('check2')
        
        if q1 == '50' and q2 == '40' and check == 'on':
            session['level'] = max(session.get('level', 1), 3)
            session['success'] = "¡El Oráculo aprueba tu conocimiento de la rúbrica!"
        else:
            session['error'] = "Las notas no cuadran. Revisa los porcentajes del 1er y 3er parcial."

    # Lógica de Validación para la Sala 3 (Objetivos y Competencias)
    elif room == 3:
        q1 = request.form.get('q3_1')
        q2 = request.form.get('q3_2')
        check = request.form.get('check3')
        
        if q1 == 'apps_moviles' and q2 == 'poo_fw_bd' and check == 'on':
            session['level'] = max(session.get('level', 1), 4)
            session['success'] = "¡Competencias asimiladas! Avanza a la Línea del Tiempo."
        else:
            session['error'] = "Ese no es el objetivo de la asignatura. Concéntrate."

    # Lógica de Validación para la Sala 4 (Fechas de Evaluación)
    elif room == 4:
        q1 = request.form.get('q4_1')
        q2 = request.form.get('q4_2')
        check = request.form.get('check4')
        
        if q1 == '02_06' and q2 == '17_08' and check == 'on':
            session['level'] = 5
            session['success'] = "🎉 ¡Has sobrevivido! El semestre es tuyo."
        else:
            session['error'] = "El tiempo se agota, revisa bien las fechas en el calendario."

    return redirect(url_for('index'))

@app.route('/reset')
def reset():
    session.clear()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)