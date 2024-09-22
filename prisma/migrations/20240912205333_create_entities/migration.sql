-- CreateTable
CREATE TABLE "Despesa" (
    "id_despesa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL,
    "forma_pagamento" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "id_categoria_despesa" INTEGER NOT NULL,
    CONSTRAINT "Despesa_id_categoria_despesa_fkey" FOREIGN KEY ("id_categoria_despesa") REFERENCES "CategoriaDespesa" ("id_categoria_despesa") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CategoriaDespesa" (
    "id_categoria_despesa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT
);
