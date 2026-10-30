import React, { useReducer } from 'react'
import './App.css'

const initialState = {
  value: '',
  city: '',
  search: '',
  filter: 'all',
  modal: null,
  editId: null,
  infoId: null,
  error: '',
  data: [
    { id: 1, name: 'Ahmad', city: 'Душанбе', status: true },
    { id: 2, name: 'Amrullo', city: 'Худжанд', status: false },
    { id: 3, name: 'Sardor', city: 'Бохтар', status: true },
    { id: 4, name: 'Dilnoza', city: 'Куляб', status: true },
    { id: 5, name: 'Madina', city: 'Душанбе', status: false },
    { id: 6, name: 'Rustam', city: 'Истаравшан', status: true },
    { id: 7, name: 'Farruh', city: 'Худжанд', status: false },
    { id: 8, name: 'Zarina', city: 'Душанбе', status: true },
  ],
}

const usersReducer = (state, action) => {
  if (action.type == 'value') {
    return { ...state, value: action.value, error: '' }
  }

  if (action.type == 'city') {
    return { ...state, city: action.value }
  }

  if (action.type == 'openAdd') {
    return { ...state, modal: 'add', value: '', city: '', error: '' }
  }

  if (action.type == 'openEdit') {
    return {
      ...state,
      modal: 'edit',
      editId: action.value.id,
      value: action.value.name,
      city: action.value.city,
      error: '',
    }
  }

  if (action.type == 'openInfo') {
    return { ...state, modal: 'info', infoId: action.value }
  }

  if (action.type == 'close') {
    return { ...state, modal: null }
  }

  if (action.type == 'add') {
    if (state.value.trim() == '') {
      return { ...state, error: 'Введите имя' }
    }
    const newUser = {
      id: Date.now(),
      name: state.value.trim(),
      city: state.city.trim() || 'Не указан',
      status: true,
    }
    return { ...state, data: [newUser, ...state.data], modal: null, search: '', filter: 'all' }
  }

  if (action.type == 'saveEdit') {
    if (state.value.trim() == '') {
      return { ...state, error: 'Введите имя' }
    }
    return {
      ...state,
      data: state.data.map((elem) =>
        elem.id == state.editId
          ? { ...elem, name: state.value.trim(), city: state.city.trim() || 'Не указан' }
          : elem
      ),
      modal: null,
    }
  }

  if (action.type == 'delete') {
    return { ...state, data: state.data.filter((elem) => elem.id !== action.value) }
  }

  if (action.type == 'checkbox') {
    return {
      ...state,
      data: state.data.map((elem) =>
        elem.id == action.value ? { ...elem, status: !elem.status } : elem
      ),
    }
  }

  if (action.type == 'search') {
    return { ...state, search: action.value }
  }

  if (action.type == 'filter') {
    return { ...state, filter: action.value }
  }

  return state
}

const App = () => {
  const [state, dispatch] = useReducer(usersReducer, initialState)

  const filtered = state.data.filter((elem) => {
    const bySearch = elem.name.toLowerCase().includes(state.search.toLowerCase())
    const byStatus = state.filter == 'all' || String(elem.status) == state.filter
    return bySearch && byStatus
  })

  const infoUser = state.data.find((elem) => elem.id == state.infoId)
  const activeCount = state.data.filter((elem) => elem.status).length

  return (
    <div className="app">
      <div className="header">
          <h1>Пользователи</h1>
        <button className="btn main" onClick={() => dispatch({ type: 'openAdd' })}>
          Добавить
        </button>
      </div>

      <div className="toolbar">
        <input
          placeholder="Поиск по имени"
          value={state.search}
          onChange={(e) => dispatch({ type: 'search', value: e.target.value })}
        />
        <select
          value={state.filter}
          onChange={(e) => dispatch({ type: 'filter', value: e.target.value })}
        >
          <option value="all">Все</option>
          <option value="true">Активные</option>
          <option value="false">Неактивные</option>
        </select>
      </div>

      {filtered.length == 0 && <p className="empty">Никого не нашли. Измените поиск или фильтр.</p>}

      <div className="list">
        {filtered.map((elem) => {
          return (
            <div key={elem.id} className="card">
              <div className="top">
                <div className="who">
                  <h3>{elem.name}</h3>
                  <p>{elem.city}</p>
                </div>
                <span className={elem.status ? 'badge on' : 'badge off'}>
                  {elem.status ? 'Активен' : 'Неактивен'}
                </span>
              </div>

              <div className="bottom">
                <input
                  type="checkbox"
                  className="switch"
                  checked={elem.status}
                  onChange={() => dispatch({ type: 'checkbox', value: elem.id })}
                />
                <div className="buttons">
                  <button className="btn" onClick={() => dispatch({ type: 'openInfo', value: elem.id })}>
                    Инфо
                  </button>
                  <button className="btn" onClick={() => dispatch({ type: 'openEdit', value: elem })}>
                    Изменить
                  </button>
                  <button className="btn danger" onClick={() => dispatch({ type: 'delete', value: elem.id })}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {state.modal && (
        <div className="overlay" onClick={() => dispatch({ type: 'close' })}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {state.modal == 'info' && infoUser && (
              <div className="info">
                <h2>{infoUser.name}</h2>
                <span className={infoUser.status ? 'badge on' : 'badge off'}>
                  {infoUser.status ? 'Активен' : 'Неактивен'}
                </span>
                <p>ID: {infoUser.id}</p>
                <p>Город: {infoUser.city}</p>
                <button className="btn main" onClick={() => dispatch({ type: 'close' })}>
                  Закрыть
                </button>
              </div>
            )}

            {(state.modal == 'add' || state.modal == 'edit') && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  dispatch({ type: state.modal == 'add' ? 'add' : 'saveEdit' })
                }}
              >
                <h2>{state.modal == 'add' ? 'Новый пользователь' : 'Изменить пользователя'}</h2>

                <label className="field">
                  Имя
                  <input
                    autoFocus
                    placeholder="Введите имя"
                    value={state.value}
                    onChange={(e) => dispatch({ type: 'value', value: e.target.value })}
                  />
                </label>

                <label className="field">
                  Город
                  <input
                    placeholder="Введите город"
                    value={state.city}
                    onChange={(e) => dispatch({ type: 'city', value: e.target.value })}
                  />
                </label>

                {state.error && <p className="error">{state.error}</p>}

                <div className="modal-buttons">
                  <button type="button" className="btn" onClick={() => dispatch({ type: 'close' })}>
                    Отмена
                  </button>
                  <button type="submit" className="btn main">
                    {state.modal == 'add' ? 'Добавить' : 'Сохранить'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App