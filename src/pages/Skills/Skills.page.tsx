import React from 'react';
import styles from './styles/Skills.module.scss';

export interface SkillsInterface {}

const Skills: React.FC<SkillsInterface> = () => {
	return <div className={styles.Skills}>Skills</div>;
};

export default Skills;
