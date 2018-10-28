import { Injectable } from '@angular/core'
import { IManifest }  from '@core/modules/models/manifest'

@Injectable()
export class ManifestService {
  private manifestObj: IManifest

  constructor() {
  }

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

    err.push(this.checkVersion())
    err.push(this.checkName())
    err.push(this.checkAuthor())
    err.push(this.checkEntryFile())
    err.push(this.checkCSSFile())
    return err
  }

  getEntryFile(): string {
    return this.manifestObj.entry_file
  }

  getCSSFile(): string {
    return this.manifestObj.css_file
  }

  private checkVersion(): { scope: string, error: string } {
    const reVersion = new RegExp(/^([\d]+)\.([\d]+)$/)

    return !this.manifestObj.version
      ? { scope: 'manifest.json', error: 'missing \'version\' key' }
      : !reVersion.test(this.manifestObj.version)
        ? { scope: 'manifest.json', error: 'wrong version format. Should be [major].[minor]' }
        : null
  }

  private checkName(): { scope: string, error: string } {
    return !this.manifestObj.name
      ? { scope: 'manifest.json', error: 'missing \'name\' key' }
      : null
  }

  private checkAuthor(): { scope: string, error: string } {
    return !this.manifestObj.author
      ? { scope: 'manifest.json', error: 'missing \'author\' key' }
      : null
  }

  private checkEntryFile(): { scope: string, error: string } {
    return !this.manifestObj.entry_file
      ? { scope: 'manifest.json', error: 'missing \'entry_file\' key' }
      : this.manifestObj.entry_file.slice(this.manifestObj.entry_file.length - 11,
        this.manifestObj.entry_file.length) !== '.umd.min.js'
        ? { scope: 'manifest.json', error: '\'entry_file\' must be a library ending in \'.umd.min.js\'' }
        : null
  }

  private checkCSSFile(): { scope: string, error: string } {
    return !this.manifestObj.css_file
      ? { scope: 'manifest.json', error: 'missing \'css_file\' key' }
      : this.manifestObj.css_file.slice(this.manifestObj.css_file.length - 4,
        this.manifestObj.css_file.length) !== '.css'
        ? { scope: 'manifest.json', error: '\'css_file\' must be a file ending in \'.css\'' }
        : null
  }
}
