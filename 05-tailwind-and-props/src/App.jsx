
import './App.css'
import  Card from  "./components/Card"

function App() {

  const  detailsObj = {
    "name": "Rabin",
    "designation": "Google Worker",
    "age": 29,
    "email": "rabin@example.com",
    "location": {
      "city": "Mountain View",
      "state": "California",
      "country": "USA"
    },
    "skills": ["JavaScript", "Python", "Machine Learning"],
    "experience": 5,
    "projects": [
      {
        "name": "Project Alpha",
        "role": "Lead Developer",
        "year": 2023
      },
      {
        "name": "Project Beta",
        "role": "Developer",
        "year": 2022
      }
    ],
    "education": {
      "degree": "Bachelor's in Computer Science",
      "university": "Stanford University",
      "year": 2018
    }
  }
  
  return (
<>
    <Card system = "linux" details = {detailsObj}/>
    <Card system ="mac"  details = {detailsObj} />
</>
  )
}

export default App
