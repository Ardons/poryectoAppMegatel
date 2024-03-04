from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Inicializa el navegador
driver = webdriver.Chrome()  # Asegúrate de tener el controlador de Chrome instalado y en tu PATH

try:
    # Abre la aplicación web
    driver.get("URL_DE_TU_APLICACION")

    # Localiza los elementos del formulario
    nombre_input = driver.find_element_by_id("nombre")
    correo_input = driver.find_element_by_id("correo")
    telefono_input = driver.find_element_by_id("telefono")
    empresa_input = driver.find_element_by_id("empresa")
    enviar_button = driver.find_element_by_id("boton-form-enviar")

    # Ingresa datos en el formulario
    nombre_input.send_keys("Ejemplo Nombre")
    correo_input.send_keys("ejemplo@correo.com")
    telefono_input.send_keys("1234567890")
    empresa_input.send_keys("Ejemplo Empresa")

    # Envía el formulario
    enviar_button.click()

    # Espera unos segundos para que los cambios se reflejen
    time.sleep(2)

    # Realiza alguna verificación (puedes adaptar esto según tus necesidades)
    seccion_tabla = driver.find_element_by_id("registro-datos")
    filas_tabla = seccion_tabla.find_elements_by_class_name("dato")

    assert any("Ejemplo Nombre" in fila.text for fila in filas_tabla), "Fallo al agregar datos"

    print("Test exitoso")

finally:
    # Cierra el navegador
    driver.quit()
