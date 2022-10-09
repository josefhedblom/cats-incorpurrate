package main

import (
	"net/http"
	"log"
	"io/ioutil"
	"fmt"
)
func main() {
	data, err := ioutil.ReadFile("./catdata.json")
	
	if err != nil {
		fmt.Print(err)
	}

	http.HandleFunc("/api/cats", func(rw http.ResponseWriter, r *http.Request) {
		rw.Write(data)
	})

	http.Handle("/", http.FileServer(http.Dir("./dist")))
	log.Fatal(http.ListenAndServe(":4000", nil))
}
