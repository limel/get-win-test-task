interface TabContent {
	key: string;
	label: string;
	content: React.ReactNode;
}

export interface TabsComponentProps {
	tabsContent?: TabContent[];
}
