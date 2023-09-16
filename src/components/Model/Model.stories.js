import laptopTexture from 'assets/spr-lesson-builder-dark-large.jpg';
import laptopTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import laptopTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import { Model } from 'components/Model/Model';
import { StoryContainer } from '../../../.storybook/StoryContainer';
import { deviceModels } from './deviceModels';

export default {
  title: 'Model',
};

const modelStyle = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 };
export const Laptop = () => (
  <StoryContainer padding={0}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 8 }}
      alt="Laptop model"
      models={[
        {
          ...deviceModels.laptop,
          position: { x: 0, y: 0, z: 0 },
          texture: {
            srcSet: [laptopTexture, laptopTextureLarge],
            placeholder: laptopTexturePlaceholder,
          },
        },
      ]}
    />
  </StoryContainer>
);
