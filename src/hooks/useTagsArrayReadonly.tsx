import React from 'react';
import { useContext } from "react";

// контекст для TagsArrayContainer, сохраняющий значение свойства readonly
export const TagsArrayContext = React.createContext(false);

// хук для TagItem, который берет значение свойства readonly из контекста
export let useTagsArrayReadonly = () => useContext(TagsArrayContext);
