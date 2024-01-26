pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                sh 'npm install jest;npm test || exit 1' 
            }
        }
    }
}
