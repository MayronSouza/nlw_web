import React, { useState, FormEvent } from 'react'

// Componentes
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

// Serviços
import api from '../../services/api'

// Styles
import './styles.css'

function TeacherList() {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')

async function searchTeachers(e: FormEvent) {
  e.preventDefault()

  const response = await api.get('classes', {
    params: {
      subject,
      week_day: weekDay,
      time
    }
  })

  setTeachers(response.data)
}

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title='Estes são os proffys disponsíveis'>
        <form id="search-teachers" onSubmit={ searchTeachers }>
          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options = {[
              {value: "Artes", label: "Artes"},
              {value: "Biologia", label: "Biologia"},
              {value: "Ciências", label: "Ciências"},
              {value: "Educação Física", label: "Educação Física"},
              {value: "Física", label: "Física"},
              {value: "Geografia", label: "Geografia"},
              {value: "História", label: "História"},
              {value: "Matemática", label: "Matemática"},
              {value: "Português", label: "Português"},
              {value: "Química", label: "Química"},
              {value: "Sociologia", label: "Artes"},
              {value: "Filosofia", label: "Filosofia"},
            ]}
          />
          <Select
            label="Dia da semana"
            name="week-day"
            value={weekDay}
            onChange={e => setWeekDay(e.target.value)}
            options = {[
              {value: "0", label: "Domingo"},
              {value: "1", label: "Segunda-feira"},
              {value: "2", label: "Terça-feira"},
              {value: "3", label: "Quarta-feira"},
              {value: "4", label: "Quinta-feira"},
              {value: "5", label: "Sexta-feira"},
              {value: "6", label: "Sábado"},
            ]}
          />
          <Input 
            type="time"
            label="Hora"
            name="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <button className="button-teacher-list" type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

export default TeacherList