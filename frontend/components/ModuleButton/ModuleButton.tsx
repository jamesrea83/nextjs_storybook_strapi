import classNames from 'classnames';

import styles from './ModuleButton.module.css';

export type Props = {
	style?: string;
};

export const ModuleButton = ({ style }: Props) => {
	return <button className={classNames(styles.button, style)}>Click Me</button>;
};

export const PrimaryModuleButton = () => <ModuleButton></ModuleButton>;

export const SecondaryModuleButton = () => (
	<ModuleButton style={styles.secondary}></ModuleButton>
);
