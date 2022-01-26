import { CSSProperties } from 'react';
import { fileNames } from '../assets/icons';

type TIconName = 'call' | 'history' | 'menu' | 'office' | 'police' | 'tmap';
interface IProps {
  /** Icon svg id */
  name: TIconName;
  /** Icon color  */
  color?: string;
  /** Icon line color (path나 g로 그리지 않는 경우지만 쓸일이 없을거 같은..)  */
  stroke?: string;
  /** Icon 가로값 */
  width?: string;
  /** Icon 세로값 */
  height?: string;
}

const defaultProps: Partial<IProps> = {
  name: 'call',
};

export type TIconProps = Partial<IProps> & typeof defaultProps;

function Icon({ name, color, stroke, width, height }: TIconProps) {
  const style: CSSProperties = {
    color: color ?? undefined,
    stroke: stroke ?? undefined,
  };

  if (name && fileNames.includes(name)) {
    return (
      <svg className="icon" width={width} height={height} style={style}>
        <use href={`#${name}`}></use>
      </svg>
    );
  }

  return null;
}

export default Icon;
