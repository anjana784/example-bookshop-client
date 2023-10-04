// 01
export interface ArtWork {
  name: "Art Work";
  price: number;
}
// 02
export interface TracingOrPositive {
  name: "Tracing or Positive";
  price: number;
}
// 03
export interface Plate {
  name: "Plate";
  price: number;
}
// 04
export interface Paper {
  name: "Paper";
  price: number;
  wastage: number;
  total: number;
}
// 05
export interface Impression {
  name: "Impression";
  price: number;
}
// 06
export interface MakeReady {
  name: "Make Ready";
  pricePerColor: number;
  total: number;
}
// 07
export interface MattLamination {
  name: "Matt Lamination";
  pricePerInch: number;
  total: number;
}
// 08
export interface GlossLamination {
  name: "Gloss Lamination";
  pricePerInch: number;
  total: number;
}
// 09
export interface EmbossingBlock {
  name: "Embossing Block";
  price: number;
}
// 10
//unentered
export interface Folding {
  name: "Folding";
  type: {
    name: String;
    price: number;
  };
  total: number;
}
// 11
export interface FoilingCharge {
  name: "Foiling Charge";
  price: number;
}
// 12
export interface FoilingBlockCharge {
  name: "Foiling Block Charge";
  price: number;
}
// 13
export interface DiCutterCharge {
  name: "Di Cutter Charge";
  price: number;
}
// 14
export interface CylinderOrPlatingCharge {
  name: "Cylinder or Plating Charge";
  price: number;
}
// 15
export interface Pasting {
  name: "Pasting";
  price: number;
}
// 16
export interface Binding {
  name: "Binding";
  price: number;
}
// 17
export interface Cutting {
  name: "Cutting";
  price: number;
}
// 18
export interface OpVarnish {
  name: "Op Varnish";
  price: number;
}
// 19
export interface UvVarnish {
  name: "UV Varnish";
  pricePerInch: number;
  total: number;
}
// 20
export interface SpotVarnish {
  name: "Spot Varnish";
  price: number;
}
// 21
export interface HipopUV {
  name: "Hipop UV";
  pricePerInch: number;
  total: number;
}
// 22
export interface SpecialInk {
  name: "Special Ink";
  price: number;
}

export type JobOptions = Array<
  | ArtWork
  | TracingOrPositive
  | Plate
  | Paper
  | Impression
  | MakeReady
  | MattLamination
  | GlossLamination
  | EmbossingBlock
  | Folding
  | FoilingCharge
  | FoilingBlockCharge
  | DiCutterCharge
  | CylinderOrPlatingCharge
  | Pasting
  | Binding
  | Cutting
  | OpVarnish
  | UvVarnish
  | SpotVarnish
  | HipopUV
  | SpecialInk
>;
