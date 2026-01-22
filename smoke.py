from selenium import webdriver
import time 

driver=webdriver.Firefox()

driver.get("http://127.0.0.1:5500/login.html")
time.sleep(3)
driver.quit()