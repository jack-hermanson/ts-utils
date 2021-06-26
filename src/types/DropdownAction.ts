export class DropdownAction {
    constructor(label: string) {
        this.label = label;
    }

    public label: string;
}

export class ClickDropdownAction extends DropdownAction {
    constructor(label: string, onClick: () => any) {
        super(label);
        this.onClick = onClick;
    }

    public onClick: () => any;
}

export class LinkDropdownAction extends DropdownAction {
    constructor(label: string, linkPath: string) {
        super(label);
        this.linkPath = linkPath;
    }

    public linkPath: string;
}
