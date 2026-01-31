pipeline {
    agent any

    tools {
        go 'go-1.21'
    }

    environment {
        GO111MODULE = 'on'
    }

    stages {
        stage('Test') {
            steps {
                git branch: 'main', url: 'https://github.com/ghassan1212/Repo_Jenkins.git'
                bat '''
                if exist *.go (
                go test ./... -v
                ) else (
                echo No Go files found, skipping tests
                )
                '''
            }
        }
    }
}