@echo off
title Luxera Towers - Gelistirici Paneli
color 0B

echo ===================================================
echo        LUXERA TOWERS PROJESI KONTROL PANELI
echo ===================================================
echo.

:: 1. Node.js Kontrolu
where node >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo [HATA] Bilgisayarinizda Node.js yuklu degil! 
    echo Lutfen https://nodejs.org/ adresinden Node.js indirip kurun.
    echo Kurulum bittikten sonra bu dosyayi tekrar calistirin.
    pause
    exit /b
)

:: 2. npm Kontrolu
where npm >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo [HATA] npm bulunamadi! Node.js kurulumunuz hatali olabilir.
    pause
    exit /b
)

echo [OK] Node.js ve npm kurulu.
echo.

:: 3. Akilli Kutuphane (Dependency) Kontrolu
if not exist node_modules\NUL (
    echo ===================================================
    echo Kutuphaneler ilk kez yukleniyor...
    echo Lutfen bekleyin, bu islem birkac dakika surebilir.
    echo ===================================================
    call npm install
    echo [OK] Kutuphaneler basariyla yuklendi!
) else (
    echo [OK] Kutuphaneler zaten yuklu.
)

:MENU
echo.
echo ===================================================
echo Lutfen baslatmak istediginiz modu secin:
echo ===================================================
echo [1] Standart Gelistirme Modu (Hizli, Yerel Test)
echo [2] Ag Modu (Telefon veya Tabletten Test Etmek Icin)
echo [3] Canli Performans Modu (Build ^& Preview)
echo [4] Cikis
echo.

set secim=
set /p secim="Seciminiz (1/2/3/4): "

if "%secim%"=="1" goto DEV_MODE
if "%secim%"=="2" goto NETWORK_MODE
if "%secim%"=="3" goto BUILD_MODE
if "%secim%"=="4" exit

color 0C
echo Hatali secim! Lutfen 1, 2, 3 veya 4 tuslayin.
color 0B
goto MENU

:DEV_MODE
echo.
echo [BILGI] Gelistirme Modu baslatiliyor...
echo Tarayiciniz otomatik olarak acilacaktir, lutfen bekleyin.
echo Sunucuyu durdurmak icin bu pencereyi kapatabilirsiniz.
color 0E
title Luxera Towers - Dev Server
call npm run dev -- --open
exit

:NETWORK_MODE
echo.
echo [BILGI] Ag Modu baslatiliyor...
echo Ekranda cikan "Network:" karsisindaki IP adresini
echo ayni Wi-Fi agina bagli telefonunuzun tarayicisina yazarak
echo siteyi mobilden test edebilirsiniz.
echo Tarayiciniz bilgisayarda otomatik acilacaktir.
echo.
color 0D
title Luxera Towers - Network Server
call npm run dev -- --host --open
pause
exit

:BUILD_MODE
echo.
echo [BILGI] Proje derleniyor (Build)... Lutfen bekleyin.
color 0A
call npm run build
if %errorlevel% neq 0 (
    color 0C
    echo [HATA] Derleme sirasinda bir sorun olustu.
    pause
    exit /b
)
echo [OK] Derleme basarili. Canli onizleme baslatiliyor...
title Luxera Towers - Production Preview
call npm run preview -- --open
pause
exit
