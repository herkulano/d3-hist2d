declare module 'd3' {
  export function hist2d<T>(): Hist2D<T>;

  interface Hist2D<T> {
    (data: Array<Array<number>>, callback: (hist: Array<Array<number>>) => void): Hist2D<T>;

    // hist2d.bins(number) => b
    bins(): number;
    bins(n: number): Hist2D<T>;

    // hist2d.indices([x, y]) => [x, y]
    indices(): number[];
    indices(indices: number[]): Hist2D<T>;

    // hist2d.interval(number) => t
    interval(): number;
    interval(value: number): Hist2D<T>;

    // hist2d.domain([[x1,x2],[y1,y2]]) => d
    domain(): Array<Array<number>>;
    domain(domain: Array<Array<number>>): Hist2D<T>;

    // hist2d.size([width, height]) => s
    size(): number[];
    size(values: number[]): Hist2D<T>;
  }
}

export = 'd3';
