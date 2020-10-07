<?php
    $template_loader->render_template( 'panels.php', [
        'panels' => $editor['panels']
    ], __DIR__ );

    $template_loader->render_template( 'projections.php', [
        'projections' => $editor['projections']
    ], __DIR__ );
?>
<div class="wrap clearfix woocommerce-product-filter-manage-project-wrapper">
    <h1 class="wp-heading-inline">
        <?php echo __( 'Edit Project', 'wcpf' ); ?>
        <?php if ( isset( $project_entity ) && $project_entity->get_entity_post() instanceof \WP_Post): ?>
            <span class="project-name"><?php echo apply_filters( 'the_title', $project_entity->get_entity_post()->post_title, $project_entity->get_entity_post()->ID ); ?></span>
        <?php else: ?>
            <span class="project-name"></span>
        <?php endif; ?>
    </h1>
    <div class="wcpf-notices-container"></div>
    <div id="poststuff">
        <div id="post-body" class="columns-1">
            <div id="post-body-content">
                <div class="inside">
                    <div class="page-editor-container">
                        <div class="panel editor-panel">
                            <div class="postbox panel projections-panel">
                                <h2 class="hndle">
                                    <span class="title"><?php echo __( 'Elements', 'wcpf' ); ?></span>
                                    <div class="view-mode-toggle">
                                        <div class="view-mode" data-mode="row">
                                            <i class="icon-mode wcpf-icon-row-mode"></i>
                                        </div>
                                        <div class="view-mode" data-mode="column">
                                            <i class="icon-mode wcpf-icon-column-mode"></i>
                                        </div>
                                    </div>
                                </h2>
                                <div class="inside">
                                    <div class="projections-zone empty-state">
                                        <div class="default-projections-zone-text">
                                            <span class="text"><?php echo __( 'Project does not have elements', 'wcpf' ); ?></span>
                                        </div>
                                        <div class="projections-container"></div>
                                    </div>
                                    <div class="navigation">
                                        <button class="button button-primary save-project"><?php echo __( 'Save', 'wcpf' ); ?></button>
                                        <button class="button add-element"><?php echo __('Add Element', 'wcpf' ); ?></button>
                                    </div>
                                </div>
                            </div>
                            <div class="panel options-panel"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>