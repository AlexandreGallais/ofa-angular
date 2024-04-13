import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { OfaIconName } from '../../constant/constant-icon-name';

@Component({
    selector: 'ofa-icon',
    standalone: true,
    imports: [],
    template: '',
    styleUrl: './ofa-icon.component.scss',
})
export class OfaIconComponent implements OnInit {
    @HostBinding('style.--ofa-icon-color') @Input() color?: string;
    @HostBinding('style.--ofa-icon-size') @Input() size?: string;
    @HostBinding('style.mask-image') @Input() maskImage?: string;
    @Input() name?: (typeof OfaIconName)[keyof typeof OfaIconName];

    ngOnInit(): void {
        if (!this.name) return;

        this.maskImage = `url(${self.location.origin}/assets/icon/${this.name}.svg)`;
    }
}
