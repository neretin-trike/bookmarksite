import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from '../store';

import bookMarks from '../data/bookMarks';
import tags from '../data/tags';

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
    <section>
      <input placeholder="Введите название или тег"/>
      <img alt="поиск"></img>
    </section>
  )
}

const Favicon: React.StatelessComponent<any> = function (props) {
  return (
    <figure>
      <img src={props.path} alt="иконка сайта"></img>
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
      <span style={{color: `${props.color}`}}>{props.name}</span>
      <button>x</button>
    </div>
  )
}

const TagArray: React.StatelessComponent<any> = function (props) {
  let array = props.array;
  return (
    <div>
      {array.map( (item: number, index: number) => {
        return <TagItem key = {index} name={tags[item].name} color={tags[item].color}/>
      })}
    </div>
  )
}

const MoreInfo: React.StatelessComponent<any> = function (props) {
  let {url, createDate, tagArray} = props.data; 
  return (
    <section>
      <div>{url}</div>
      <time>{createDate}</time>
      <TagArray array = {tagArray}/>
    </section>
  )
}

const BookmarkItem: React.StatelessComponent<any> = function (props) {

  let {faviconPath, caption, url, createDate, tagArray} = props.data;
  let moreInfoData: object = { url, createDate, tagArray };

  return (
    <div>
      <Favicon path = {faviconPath}/>
      <Caption caption = {caption}/>
      <Interact>
        <DeleteButton />
        <EditButton />
        <ToogleButton />
      </Interact>
      <MoreInfo data = {moreInfoData}/>
    </div>
  )
}

const BookmarkList: React.StatelessComponent<any> = function (props) {
  return (
    <section>
      {bookMarks.map( (item: object, index: number) => {
        return <BookmarkItem key={index} data = {item} />
      })}
    </section>
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
    {/* <ModalWindow /> */}
  </Provider>
);

export default App;
