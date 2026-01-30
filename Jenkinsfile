pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Build an Application'
                git 'https://github.com/ghassan1212/Repo_Jenkins.git'
            }
        }
         stage('Test') {
            steps {
                echo 'Testing the Application'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy the Application'
            }
        }
    } 
}    
