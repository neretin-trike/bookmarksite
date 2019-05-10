import React, { Component} from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from '../store';

const Button: React.StatelessComponent<any> = function (props) {
  return (
    <button>{props.name}</button>
  )
}

const Field: React.StatelessComponent<any> = function (props) {
  return (
    <input placeholder={props.placeholder}/>
  )
}
const AddBookmarkButton: React.StatelessComponent<any> = function (props) {
  return (
    <Button name="Добавить закладку"/>
  )
}

const Logo: React.StatelessComponent<any> = function (props) {
  return (
    <div>
      <h1>Сайт закладок</h1>
      <img alt="логотип"></img>
    </div>
  )
}

const Header: React.StatelessComponent<any> = function (props) {
  return (
    <header>
      <Logo />
      <AddBookmarkButton />
    </header>
  )
}

const SearchBar: React.StatelessComponent<any> = function (props) {
  return (
    <div>
      <input placeholder="Введите название или тег"/>
      <img alt="поиск"></img>
    </div>
  )
}

const Favicon: React.StatelessComponent<any> = function (props) {
  return (
    <figure>
      <img alt="иконка сайта"></img>
    </figure>
  )
}

const Caption: React.StatelessComponent<any> = function (props) {
  return (
    <div>
      {props.caption}
    </div>
  )
}

const DeleteButton: React.StatelessComponent<any> = function (props) {
  return (
    <Button name="удалить"/>
  )
}

const EditButton: React.StatelessComponent<any> = function (props) {
  return (
    <Button name="редактировать"/>
  )
}

const ToogleButton: React.StatelessComponent<any> = function (props) {
  return (
    <Button name="подробнее"/>
  )
}

const Interact: React.StatelessComponent<any> = function (props) {
  return (
    <section>
      {props.children}
    </section>
  )
}

const TagItem: React.StatelessComponent<any> = function (props) {
  return (
    <div>
      <span>{props.name}</span>
      <button>x</button>
    </div>
  )
}

const TagArray: React.StatelessComponent<any> = function (props) {
  return (
    <div>
      <TagItem name="Тег1"/>
      <TagItem name="Тег2"/>
      <TagItem name="Тег3"/>
      <TagItem name="Тег4"/>
      <TagItem name="Тег5"/>
    </div>
  )
}

const MoreInfo: React.StatelessComponent<any> = function (props) {
  return (
    <section>
      <div>http://</div>
      <time>20:20 03.02.2018</time>
      <TagArray />
    </section>
  )
}

const BookmarkItem: React.StatelessComponent<any> = function (props) {
  return (
    <div>
      <Favicon />
      <Caption />
      <Interact>
        <DeleteButton />
        <EditButton />
        <ToogleButton />
      </Interact>
      <MoreInfo />
    </div>
  )
}

const BookmarkList: React.StatelessComponent<any> = function (props) {
  return (
    <div>
      <BookmarkItem />
      <BookmarkItem />
      <BookmarkItem />
      <BookmarkItem />
    </div>
  )
}

const Main: React.StatelessComponent<any> = function (props) {
  return (
    <main>
      <SearchBar />
      <BookmarkList />
    </main>
  )
}

const CaptionField: React.StatelessComponent<any> = function (props) {
  return (
    <Field placeholder="Название закладки"/>
  )
}

const URLField: React.StatelessComponent<any> = function (props) {
  return (
    <Field placeholder="Адрес сайта"/>
  )
}

const TagField: React.StatelessComponent<any> = function (props) {
  return (
    <div>
      <Field placeholder="Имя тега"/>
      <TagArray />
    </div>
  )
}

const FieldGroup: React.StatelessComponent<any> = function (props) {
  return (
    <section>
      <CaptionField />
      <URLField />
      <TagField />
    </section>
  )
}

const CloseButton: React.StatelessComponent<any> = function (props) {
  return (
    <Button name="Закрыть" />
  )
}

const SaveButton: React.StatelessComponent<any> = function (props) {
  return (
    <Button name="Сохранить" />
  )
}

const Window: React.StatelessComponent<any> = function (props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <FieldGroup />
      <Interact>
        <CloseButton />
        <SaveButton />
      </Interact>
    </div>
  )
}

const ModalWindow: React.StatelessComponent<any> = function (props) {
  return (
    <Window title="Добавление новой закладки"/>
  )
}

const App: React.StatelessComponent<any> = () => (
  <Provider store={store}>
    <Header />
    <Main />
    <ModalWindow />
  </Provider>
);

export default App;
