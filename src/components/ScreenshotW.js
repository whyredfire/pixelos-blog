import React from 'react';
import clsx from 'clsx';
import styles from './Screenshots.module.css';

export default function ScreenshotW({name, alt, width, height, showCaption, large}) {
  return (
    <div className={clsx(styles.screenshotContainer)}>
      <picture>
        <img
          className={clsx(styles.screenshot, large ? styles.screenshotLarge : "")}
          width={width}
          height={height}
          src={`${name}.jpg`} alt={alt} />
      </picture>

      {showCaption &&
        <>
          <br />
          <span className={clsx(styles.screenshotCaption)}>{alt}</span>
        </>
      }
    </div>
  );
}

ScreenshotW.defaultProps = {
  width: 205,
  height: 433,
  showCaption: true,
  large: false,
};
