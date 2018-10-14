import { createSelector } from '@ngrx/store'
import * as fromFeature   from '../reducers'
import * as fromModules   from '../reducers/module.reducers'
import * as fromRouter    from '@store'
import { IModule }        from '@core/modules/models/module'

export const getModuleState = createSelector(
  fromFeature.getModulesState,
  (state: fromFeature.IModulesState) => state.modules
)

export const getModuleEntities = createSelector(
  getModuleState,
  fromModules.getEntities
)

export const getSelectedModule = createSelector(
  getModuleState,
  fromRouter.getRouterState,
  (entities, router): IModule => {
    return router.state && entities.entities[router.state.params.id]
  }
)

export const getAllModules = createSelector(
  getModuleEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
  }
)

export const getModuleLoaded = createSelector(
  getModuleState,
  fromModules.getLoaded
)

export const getModuleLoading = createSelector(
  getModuleState,
  fromModules.getLoading
)

export const getModuleError = createSelector(
  getModuleState,
  fromModules.getError
)
