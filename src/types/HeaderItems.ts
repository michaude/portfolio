import React, { Component, FC } from "react";
import { To } from "react-router-dom";
import { JsxElement, JsxFragment } from "typescript";

export type HeaderItems = {
  text: string;
  link: string;
  pageComponent: JSX.Element | undefined;
};
