import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import s from './Tabs.module.less';
import { TabsComponentProps } from './Tabs.types';
import { useState, useEffect } from 'react';

const TabsComponent: React.FC<TabsComponentProps> = ({ tabsContent = [] }) => {
	const [items, setItems] = useState<TabsProps['items']>([]);

	useEffect(() => {
		const tabs: TabsProps['items'] = tabsContent.map(tab => ({
			key: tab.key,
			label: tab.label,
			children: tab.content,
		}));

		setItems(tabs);
	}, [tabsContent]);

	return (
		<Tabs
			className={s.tabs}
			defaultActiveKey="1"
			centered
			size="large"
			items={items}
		/>
	);
};

export default TabsComponent;
