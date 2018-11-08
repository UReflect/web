import { Injectable } from '@angular/core'
import { IManifest }  from '@core/modules/models/manifest'

/**
 * Manifest checker service
 */
@Injectable()
export class ManifestService {
  /**
   * Manifest in JSON format
   */
  private manifestObj: IManifest

  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Checks manifest.json attributes
   * @param manifest manifest.json in string format
   */
  checkManifest(manifest: string): any {
    const err = []

    if (manifest.length <= 0) {
      return [{
        scope: 'manifest.json',
        error: 'file is empty'
      }]
    }
    try {
      this.manifestObj = JSON.parse(manifest)
    } catch (e) {
      return [{
        scope: 'manifest.json',
        error: 'file is not a valid JSON'
      }]
    }

    if (this.checkVersion() !== null) {
      err.push(this.checkVersion())
    }
    if (this.checkName() !== null) {
      err.push(this.checkName())
    }
    if (this.checkAuthor() !== null) {
      err.push(this.checkAuthor())
    }
    if (this.checkEntryFile() !== null) {
      err.push(this.checkEntryFile())
    }
    if (this.checkCSSFile() !== null) {
      err.push(this.checkCSSFile())
    }
    return err
  }

  /**
   * Returns entry_file value
   */
  getEntryFile(): string {
    return this.manifestObj.entry_file
  }

  /**
   * Returns css_file value
   */
  getCSSFile(): string {
    return this.manifestObj.css_file
  }

  /**
   * Checks manifest.json version
   */
  private checkVersion(): { scope: string, error: string } {
    const reVersion = new RegExp(/^([\d]+)\.([\d]+)$/)

    return !this.manifestObj.version
      ? { scope: 'manifest.json', error: 'missing \'version\' key' }
      : !reVersion.test(this.manifestObj.version)
        ? { scope: 'manifest.json', error: 'wrong version format. Should be [major].[minor]' }
        : null
  }

  /**
   * Checks manifest.json name
   */
  private checkName(): { scope: string, error: string } {
    return !this.manifestObj.name
      ? { scope: 'manifest.json', error: 'missing \'name\' key' }
      : null
  }

  /**
   * Checks manifest.json author
   */
  private checkAuthor(): { scope: string, error: string } {
    return !this.manifestObj.author
      ? { scope: 'manifest.json', error: 'missing \'author\' key' }
      : null
  }

  /**
   * Checks manifest.json entry_file
   */
  private checkEntryFile(): { scope: string, error: string } {
    return !this.manifestObj.entry_file
      ? { scope: 'manifest.json', error: 'missing \'entry_file\' key' }
      : this.manifestObj.entry_file.slice(this.manifestObj.entry_file.length - 11,
        this.manifestObj.entry_file.length) !== '.umd.min.js'
        ? { scope: 'manifest.json', error: '\'entry_file\' must be a library ending in \'.umd.min.js\'' }
        : null
  }

  /**
   * Checks manifest.json css_file
   */
  private checkCSSFile(): { scope: string, error: string } {
    return !this.manifestObj.css_file
      ? { scope: 'manifest.json', error: 'missing \'css_file\' key' }
      : this.manifestObj.css_file.slice(this.manifestObj.css_file.length - 4,
        this.manifestObj.css_file.length) !== '.css'
        ? { scope: 'manifest.json', error: '\'css_file\' must be a file ending in \'.css\'' }
        : null
  }
}
