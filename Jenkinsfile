pipeline {
    agent any

    tools {
        go 'go-1.25.6'
    }

    environment {
        GO111MODULE = 'off'
    }

    stages {

        stage('Development') {
            steps {
                // Git is already checked out by Jenkins
                bat '''
                if exist *.go (
                    go test ./... -v
                ) else (
                    echo No Go files found, skipping tests
                )
                '''
            }
        }

        stage('Docker Info') {   // <-- Add it here, before building the image
            steps {
                bat 'docker info'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def app = docker.build("adminturneddevops.go-webapp-sample")
                }
            }
        }
    }
}
