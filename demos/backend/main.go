package main

import (
	"backend/pkg"
	"log"
)

func main() {
	router := pkg.SetupRouter()
	
	log.Println("Starting server on :8080")
	if err := router.Run(":8080"); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}