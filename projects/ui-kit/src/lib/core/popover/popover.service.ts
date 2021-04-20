import { Injectable, Injector, Type } from '@angular/core';
import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PopoverRef, PopoverContent, IPopoverRef } from './popover-ref';
import { PopoverComponent } from './popover.component-base';
import { IPopoverConfig, IPopoverPositionDefinition } from './interfaces';
import { POPOVER_POSITION_DEFINITIONS } from './popover-positions';
import { FlexibleConnectedPositionStrategyOrigin } from '@angular/cdk/overlay';

export const DEFAULT_POPOVER_CONFIG: IPopoverConfig = {
  minWidth: 'auto',
  minHeight: 'auto',
  backdropClass: 'uikit-popover-backdrop',
};

@Injectable({
  providedIn: 'root',
})
export class UiKitPopoverService<T extends PopoverComponent = any> {
  private defaultParams = DEFAULT_POPOVER_CONFIG;

  constructor(
    private readonly overlay: Overlay,
    private readonly injector: Injector
  ) {}

  public open(
    type: Type<T>,
    origin: FlexibleConnectedPositionStrategyOrigin,
    content: PopoverContent,
    config: IPopoverConfig = {}
  ): IPopoverRef<T> {
    const popoverConfig = this.getPopoverConfig(config);
    const positionStrategy = this.getFlexiblePositionStrategy(
      origin,
      popoverConfig.positions || [{ name: 'bottomCenter' }]
    );
    const popoverRef = this.generatePopover(type, content, popoverConfig);
    popoverRef.overlay.updatePositionStrategy(positionStrategy);
    return popoverRef;
  }

  private generatePopover(
    type: Type<T>,
    content: PopoverContent,
    popoverConfig: IPopoverConfig
  ): IPopoverRef {
    const overlayConfig = this.getOverlayConfig(popoverConfig);
    const overlayRef = this.overlay.create(overlayConfig);
    const popoverRef = new PopoverRef(
      overlayRef,
      content,
      popoverConfig
    ) as PopoverRef<T>;
    const injector = this.createInjector(popoverRef, this.injector);
    const compRef = overlayRef.attach(
      new ComponentPortal(type, null, injector)
    );
    popoverRef.containerInstance = compRef.instance;
    return popoverRef;
  }

  private getPopoverConfig(overrideParams: IPopoverConfig): IPopoverConfig {
    return { ...this.defaultParams, ...overrideParams } as IPopoverConfig;
  }

  private createInjector(
    popoverRef: PopoverRef<T>,
    injector: Injector
  ): Injector {
    return Injector.create({
      parent: injector,
      providers: [
        {
          provide: PopoverRef,
          useValue: popoverRef,
        },
      ],
    });
  }

  private getFlexiblePositionStrategy(
    origin: FlexibleConnectedPositionStrategyOrigin,
    positions: IPopoverPositionDefinition[]
  ): FlexibleConnectedPositionStrategy {
    const connectionPositionPairs = positions.map(
      (x: IPopoverPositionDefinition) =>
        Object.assign(
          { offsetX: x.offsetX, offsetY: x.offsetY },
          POPOVER_POSITION_DEFINITIONS[x.name]
        )
    );

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(origin)
      .withPositions(connectionPositionPairs)
      .withFlexibleDimensions(false)
      .withPush(false);

    return positionStrategy;
  }

  private getOverlayConfig({
    hasBackdrop,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    backdropClass,
    panelClass,
  }: IPopoverConfig): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      backdropClass,
      panelClass,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
  }
}
