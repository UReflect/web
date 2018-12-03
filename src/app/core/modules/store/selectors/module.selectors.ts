import { createSelector } from '@ngrx/store'
import * as fromFeature   from '../reducers'
import * as fromModules   from '../reducers/module.reducer'
import * as fromRouter    from '@store'
import * as fromAuth      from '@core/auth/store'
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
 * Selector for logged user modules in an array
 */
export const getAllLoggedUserModules = createSelector(
  getModuleEntities,
  fromAuth.getAuthState,
  (entities, auth) => {
    const ret = []
    Object.keys(entities).map(id => {
      if (entities[parseInt(id, 10)].user_id === auth.loggedUser.user.ID) {
        ret.push(entities[parseInt(id, 10)])
      }
    })
    return ret
  }
)

/**
 * Selector for module search by title
 */
export const getAllModulesByTitle = createSelector(
  getModuleEntities,
  (entities, search) => {
    const ret = []
    Object.keys(entities).map(id => {
      if (entities[parseInt(id, 10)].title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        ret.push(entities[parseInt(id, 10)])
      }
    })
    return ret
  }
)

/**
 * Selector for modules by filters
 */
export const getAllModulesByFilter = createSelector(
  getAllModules,
  (modules, mode) => {
    switch (mode) {
      case 'name-asc':
        return modules.sort((a: IModule, b: IModule) =>
          a.title < b.title ? -1 : a.title > b.title ? 1 : 0)
      case 'name-desc':
        return modules.sort((a: IModule, b: IModule) =>
          a.title < b.title ? 1 : a.title > b.title ? -1 : 0)
      case 'price-asc':
        return modules.sort((a: IModule, b: IModule) =>
          a.price < b.price ? -1 : a.price > b.price ? 1 : 0)
      case 'price-desc':
        return modules.sort((a: IModule, b: IModule) =>
          a.price < b.price ? 1 : a.price > b.price ? -1 : 0)
      default:
        return modules
    }
  }
)

/**
 * Selector that combines Filtering and Research
 */
export const getAllModulesByFilterAndSearch = createSelector(
  getModuleEntities,
  (entities, props) => {
    const modules = []
    Object.keys(entities).map(id => {
      if (entities[parseInt(id, 10)].title.toLowerCase().indexOf(props.search.toLowerCase()) !== -1) {
        modules.push(entities[parseInt(id, 10)])
      }
    })
    switch (props.mode) {
      case 'name-asc':
        return modules.sort((a: IModule, b: IModule) =>
          a.title < b.title ? -1 : a.title > b.title ? 1 : 0)
      case 'name-desc':
        return modules.sort((a: IModule, b: IModule) =>
          a.title < b.title ? 1 : a.title > b.title ? -1 : 0)
      case 'price-asc':
        return modules.sort((a: IModule, b: IModule) =>
          a.price < b.price ? -1 : a.price > b.price ? 1 : 0)
      case 'price-desc':
        return modules.sort((a: IModule, b: IModule) =>
          a.price < b.price ? 1 : a.price > b.price ? -1 : 0)
      default:
        return modules
    }
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
