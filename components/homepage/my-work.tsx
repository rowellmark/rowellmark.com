import { Tab } from "../ui/tabs";


export function MyWork() {
    const tabs = [
        { label: 'All', content: <p>Content of Tab 1</p> },
        { label: 'Wordpress', content: <p>Content of Tab 2</p> },
        { label: 'React, NextJs', content: <p>Content of Tab 2</p> },
        { label: 'Shopify', content: <p>Content of Tab 3</p> },
        { label: 'Work in Progress', content: <p>Content of Tab 4</p> },
    ];

    return (
        <div className="container mx-auto">
            <Tab tabs={tabs} />
        </div>
    );
}