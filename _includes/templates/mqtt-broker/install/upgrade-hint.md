If you encounter conflicts during the merge process that are not related to your changes, 
we recommend accepting all the new changes from the remote branch.

You could revert the merge process by executing the following:
```bash
git merge --abort
```
{: .copy-code}

And repeat the merge by accepting **theirs** changes.

```bash
git pull origin {{ site.release.broker_branch }} -X theirs
```
{: .copy-code}

There are several useful options for the default merge strategy:
* **-X ours** - this option forces conflicting hunks to be auto-resolved cleanly by favoring our version.
* **-X theirs** - this is the opposite of **ours**. See more details [here](https://git-scm.com/docs/merge-strategies#_merge_strategies).

