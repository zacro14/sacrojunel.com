import React from "react";

export interface IIcon {
  name: string;
  color: string;
  link?: string;
  icon: any;
}

export interface Technology {
  title: string;
  icon: IIcon[];
}
