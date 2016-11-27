export interface Hist2D {
  (data: Array<number[]>, callback: (hist: Array<[number, number]>) => void): Hist2D;

  // hist2d.bins(number) => b
  bins(): number;
  bins(n: number): Hist2D;

  // hist2d.indices([x, y]) => [x, y]
  indices(): [number, number];
  indices(indices: [number, number]): Hist2D;

  // hist2d.interval(number) => t
  interval(): number;
  interval(value: number): Hist2D;

  // hist2d.domain([[x1,x2],[y1,y2]]) => d
  domain(): [[number, number], [number, number]];
  domain(domain: [[number, number], [number, number]]): Hist2D;

  // hist2d.size([width, height]) => s
  size(): [number, number];
  size(values: [number, number]): Hist2D;
}

export function hist2d(): Hist2D;
