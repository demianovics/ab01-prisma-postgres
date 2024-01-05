#!/bin/sh

# Warten, bis MySQL erreichbar ist
while ! nc -z mysql 3306; do
  echo "Warten auf MySQL..."
  sleep 1
done

# Führe Prisma Migrationen aus
echo "Führe Prisma Migrationen aus..."
npx prisma migrate dev

# Starte nun die Anwendung
echo "Starte die Anwendung..."
npm run debug