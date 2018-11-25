import { createSelector } from '@ngrx/store'
import * as fromFeature   from '../reducers'
import * as fromModules   from '../reducers/module.reducer'
import * as fromRouter    from '@store'
import { IModule }        from '@core/modules/models/module'

/**
 * Selector for module state
 */
export const getModuleState = createSelector(
  fromFeature.getModulesState,
  (state: fromFeature.IModuleReducerState) => state.modules
)

/**
 * Selector for module entities
 */
export const getModuleEntities = createSelector(
  getModuleState,
  fromModules.getEntities
)

/**
 * Selector for routed module
 */
export const getSelectedModule = createSelector(
  getModuleState,
  fromRouter.getRouterState,
  (entities, router): IModule => {
    return router.state && entities.entities[router.state.params.id]
  }
)

/**
 * Selector for module in an array
 */
export const getAllModules = createSelector(
  getModuleEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
  }
)

/**
 * Selector for boolean 'loaded'
 */
export const getModuleLoaded = createSelector(
  getModuleState,
  fromModules.getLoaded
)

/**
 * Selector for boolean 'loading'
 */
export const getModuleLoading = createSelector(
  getModuleState,
  fromModules.getLoading
)

/**
 * Selector for module related error
 */
export const getModuleError = createSelector(
  getModuleState,
  fromModules.getError
)
