import Svg, { Path } from "react-native-svg";
import { SvgProps } from "../interface";

const SvgSwr = ({ width = 48, height = 48 }: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 300 257"
      width={width}
      height={height}
      style={{ marginRight: 10 }}
    >
      <Path
        d="M15.39 113.53a15.24 15.24 0 0 1 11 4.91q38.5 38.51 76.91 77c12 12 24 23.91 35.86 36a15.18 15.18 0 0 1-20.94 22 8 8 0 0 1-.92-.93Q61.16 196.27 4.91 140a15.28 15.28 0 0 1 10.48-26.5Z"
        fill="#fe3f01"
      />
      <Path
        d="M283.28 143.74c-2.88 0-6.49-1.67-9.55-4.64-12.14-12.23-24.37-24.37-36.51-36.6l-76.17-76.17a15.2 15.2 0 0 1 4.45-25.11 15 15 0 0 1 16.59 3.24l27.61 27.62q42.54 42.66 85.3 85.25a15.82 15.82 0 0 1 5 11.3c0 8.37-6.9 15.11-16.72 15.11Z"
        fill="#0145fe"
      />
      <Path
        d="M143.63 191.46a14.32 14.32 0 0 1-9.17 13c-5.93 2.59-11.49 1.48-16.4-2.87a4 4 0 0 1-.65-.65q-43.51-43.5-86.92-87a15.16 15.16 0 0 1 20.39-22.47 5.47 5.47 0 0 1 1 1q43.39 43.53 86.84 86.94a15.66 15.66 0 0 1 4.91 12.05Z"
        fill="#fe3f01"
      />
      <Path
        d="M274.2 154.3a14.81 14.81 0 0 1-9.36 13.9c-6 2.41-11.68 1.39-16.31-3.15-5.84-5.56-11.49-11.4-17.15-17.14Q196.22 112.73 161 77.39a15.17 15.17 0 1 1 21.18-21.69c4 3.9 7.88 7.88 11.86 11.87l75.34 75.33a16.09 16.09 0 0 1 4.82 11.4Z"
        fill="#0145fe"
      />
      <Path
        d="M171 257.34c-5.93-.37-10.84-3.24-13.44-9.17s-1.48-11.49 2.87-16.4c1.12-1.21 2.32-2.41 3.53-3.53l58.47-58.47a15.13 15.13 0 0 1 22.42 20.3l-1.11 1.11Q213 221.9 182.27 252.71a15.93 15.93 0 0 1-11.27 4.63Z"
        fill="#0116af"
      />
      <Path
        d="M65.61 92.49a14.33 14.33 0 0 1-12.79-9.08c-2.59-5.84-1.57-11.4 2.6-16.21a7.37 7.37 0 0 1 .92-.93Q86.93 35.69 117.5 5a15.22 15.22 0 0 1 24.93 4.26 15.26 15.26 0 0 1-3.15 16.87Q116.9 48.52 94.61 70.9L77.38 88.14c-2.97 2.86-6.58 4.35-11.77 4.35Z"
        fill="#fc8a03"
      />
      <Path
        d="M222.86 153c-.09 5.65-1.58 9.18-4.45 12.05-12.14 12.14-24.18 24.28-36.42 36.42a15 15 0 0 1-16.86 3.15 15.2 15.2 0 0 1-9-14.46 14 14 0 0 1 4.17-9.82q18.34-18.5 36.88-36.88a14.83 14.83 0 0 1 16.59-2.87c5.66 2.31 9.23 7.96 9.09 12.41Z"
        fill="#0116af"
      />
      <Path
        d="M77.19 102.59a14.22 14.22 0 0 1 3.89-9.54l.56-.56C93.78 80.35 105.92 68.12 118.06 56a15.1 15.1 0 0 1 21.22 21.5l-24.47 24.46c-4 4-8 8.07-12 12a15.07 15.07 0 0 1-24.28-4.54 17.48 17.48 0 0 1-1.34-6.83Z"
        fill="#fc8a03"
      />
    </Svg>
  );
};

export default SvgSwr;